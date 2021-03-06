// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for
// license information.
// 
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.

namespace Fixtures.AcceptanceTestsAzureCompositeModelClient.Models
{
    using System;
    using System.Linq;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using Microsoft.Rest;
    using Microsoft.Rest.Serialization;
    using Microsoft.Rest.Azure;

    [JsonObject("goblin")]
    public partial class Goblinshark : Shark
    {
        /// <summary>
        /// Initializes a new instance of the Goblinshark class.
        /// </summary>
        public Goblinshark() { }

        /// <summary>
        /// Initializes a new instance of the Goblinshark class.
        /// </summary>
        public Goblinshark(double length, DateTime birthday, string species = default(string), IList<Fish> siblings = default(IList<Fish>), int? age = default(int?), int? jawsize = default(int?))
            : base(length, birthday, species, siblings, age)
        {
            Jawsize = jawsize;
        }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "jawsize")]
        public int? Jawsize { get; set; }

        /// <summary>
        /// Validate the object.
        /// </summary>
        /// <exception cref="ValidationException">
        /// Thrown if validation fails
        /// </exception>
        public override void Validate()
        {
            base.Validate();
        }
    }
}
